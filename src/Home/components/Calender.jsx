import { useState, useEffect } from "react"
import { leftvector, rightvector } from "../../assets";
import Cal, { getCalApi } from "@calcom/embed-react";
const CalendarSection = ({ calUsername = "your-username", calApiKey = "your-api-key" }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 4, 23)) // May 23, 2023
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 4, 1)) // May 2023
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("8:30pm")
  const [showBookingModal, setShowBookingModal] = useState(false)
 useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  const timeSlots = [
    { time: "12:30pm", available: true },
    { time: "1:00pm", available: true },
    { time: "3:30pm", available: true },
    { time: "4:30pm", available: true },
    { time: "5:00pm", available: true },
    { time: "6:30pm", available: true },
    { time: "8:00pm", available: true },
    { time: "8:30pm", available: true },
    { time: "9:30pm", available: true },
  ]

  // Initialize Cal.com API
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#10b981" } }, // Emerald color from the design
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Calendar data structure to match the image exactly
  const calendarData = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null]
  ]
  
  // Days header to match image
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  // Open Cal.com booking modal
  const openBookingModal = (time) => {
    setSelectedTimeSlot(time);
    
    // Format the date in YYYY-MM-DD format
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    
    // Convert time to 24-hour format
    const convertTo24Hour = (timeStr) => {
      let [time, modifier] = timeStr.split(/([ap]m)/i);
      let [hours, minutes] = time.split(':');
      
      if (hours === '12') {
        hours = '00';
      }
      
      if (modifier.toLowerCase() === 'pm') {
        hours = parseInt(hours, 10) + 12;
      }
      
      return `${hours}:${minutes || '00'}`;
    };
    
    const time24h = convertTo24Hour(time);
    
    // Open Cal.com modal with the selected date and time
    getCalApi().then((cal) => {
      cal("showEventTypeBookingForm", {
        username: calUsername,
        eventTypeId: 1, // You can change this based on your event type
        date: formattedDate,
        time: time24h,
      });
    });
  };

  // Format the date for display
  const formatSelectedDate = (date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return `${dayNames[date.getDay()]} ${date.getDate()}`;
  };

  return (
    <div className="bg-[#000A16] text-white py-8 px-4 relative overflow-hidden" id='contact'>
      {/* Central content container - dark background with rounded corners */}
      <div className="max-w-5xl mx-auto">
        {/* Header text */}
        <div className="text-center mb-6">
            <div className="relative inline-block">
                        <span className="text-white text-xs font-semibold tracking-widest uppercase">
                        C O N T A C T
                        </span>
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 w-200 h-2 "><img src={rightvector} alt="" width={200}  height={200}/></div>
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 w-50 h-2 "><img src={leftvector} alt="" /></div>
                      </div>
          <h2 className="md:text-5xl mb-7 mt-7 text-2xl font-thin mb-1">
            Have questions? <span className="text-blue-400 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent  ">Let's talk.</span>
          </h2>
          <p className="text-gray-400 text-sm">Reach out and our team will get back within 24 hours.</p>
        </div>

        {/* Calendar container */}
         
      </div>
      <Cal namespace="15min"
    calLink="anuj-loharkar/15min"
    style={{width:"100%",height:"100%",overflow:"hidden"}}
    config={{"layout":"month_view"}}
    
    
  />
      {/* Cal.com embed will appear when triggered */}
    </div>
  )
}

export default CalendarSection