
const Calendar = ()=>{

    const currentDay= new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    let LastMonthDays = (new Date(currentYear,currentMonth,0).getDay()+6)%7+1;
    const FirstDayOfMonth = (new Date(currentYear,currentMonth,1).getDay()+6)%7+1;

    const LastDayOfTheMonth = new Date(currentYear,currentMonth+1,0).getDate();

    let pastDays=new Date(currentYear,currentMonth,0).getDate();
    
    
    let pas = FirstDayOfMonth-LastMonthDays;
    
    let newDay = 1;
    let row=1;
    const day = ["Mon","Tues","Wed","Thus","Fri","Sat","Sun"];
    let nr = [[],[],[],[],[],[]];
    while(LastMonthDays){
        nr[0].unshift(pastDays--);
        LastMonthDays--;
    }
    while(pas>0){
        nr[0].push(newDay++);
        pas--;
    }
    let position=0;
    
    while(newDay!=LastDayOfTheMonth+1){
        nr[row][position++]=newDay++;
        if(position==7){
            row++;
            position=0;
        }
        
    }
    newDay=1;
    while(position!=7){
        nr[row][position++]=newDay++;
    }

    

    return (
        <>
            <section className="flex flex-col ">
                <div className="flex justify-between ">
                    {day.map(val=>{
                        return (
                            <div key={val} className="text-gray-500/90 flex items-center justify-center w-10 h-8 text-sm">
                                {val}
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col justify-between gap-2">
                    {nr.map((value,index)=>{
                        return (
                            <div key={index} className="flex justify-between gap-2" >
                                {value.map((day,i)=>{
                                    return (
                                        <div key={day} className={`${(index==0&&day>7)||(index==row&&day<newDay)?"text-gray-500/75":"text-black"} ${index!=0&&index!=row&&day==currentDay?"text-blue-500/90":""} flex items-center justify-center  grow w-10 h-8 `} >
                                            {day}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Calendar;