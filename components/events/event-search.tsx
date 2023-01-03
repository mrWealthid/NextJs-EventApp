import {useRef} from 'react';

function EventsSearch({handleSearch}: any) {
    const yearInputRef = useRef<any>();
    const monthInputRef = useRef<any>();

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selectedYear = yearInputRef?.current?.value;
        const selectedMonth = monthInputRef?.current?.value;
        if (selectedMonth && selectedYear)
            handleSearch(selectedYear, selectedMonth);
        // props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className="border gap-4  justify-center items-center bg-white flex rounded-lg  p-3"
              onSubmit={submitHandler}>
            <div className="flex  gap-5">
                <div className="form-group">
                    <label htmlFor="Year"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select ref={yearInputRef} id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Choose a year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="month"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select ref={monthInputRef} id="month"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Choose a month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Septemer</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <div className="text-center mt-2">
                <button className="bg-green-600 text-white rounded-3xl px-6 py-2 ">Find Events</button>
            </div>
        </form>
    );
}

export default EventsSearch;