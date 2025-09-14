interface Props {
    year?: number;
    month?: number;
}

const Calendar = ({year = new Date().getFullYear(), month = new Date().getMonth()}: Props) => {

    const daysOfWeek = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDayIndex = new Date(year, month, 1).getDay(); // 0=Sunday

    // Adjust firstDayIndex to Monday-first (0=Monday)
    const paddingDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    const days = Array.from({length: daysInMonth}, (_, i) => i + 1);
    
    // Split days into weeks
    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = Array(paddingDays).fill(null); // initial empty days

    days.forEach((day) => {
        week.push(day);
        if (week.length === 7) {
        weeks.push(week);
        week = [];
        }
    });
    if (week.length > 0) {
        while (week.length < 7) week.push(null); // pad last week
        weeks.push(week);
    }


    return (
        <div>
            <h3>
                {new Date(year, month).toLocaleString("no-NB", {
                    month: "long", 
                    year: "numeric"
                })}
            </h3>

            {/* Days of the week header */}
            <div className = "row text-center fw-bold">
                {daysOfWeek.map((day) => (
                    <div className = "col" key={day}>
                        {day}
                    </div>
                ))}
            </div>

            {/*Weeks*/}
            {weeks.map((week, i) => (
                <div className = "row text-center" key={i}>
                    {week.map((day, j) => (
                        <div className = "col border p-2" key={j}>
                            {day || ""}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Calendar;