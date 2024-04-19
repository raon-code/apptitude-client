import BattleCalendar from './yyj/Calendar';

export default function Home() {
    const handleDateChange = (selectedDate) => {
        console.log('Selected date:', selectedDate);
        // 다른 로직 처리
      };
    return (
        <div>
            <h1>Home</h1>
            <BattleCalendar onChange={handleDateChange} />
        </div>
    );
}