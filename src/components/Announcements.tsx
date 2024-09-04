import moment from 'moment';

const Announcements = () => {
    return(
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
            <div className="bg-mySkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
            <h2 className='font-medium'>Lorem Ipsum</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>{moment().format('mm-dd-yyyy')}</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque quae reiciendis architecto enim provident dolore alias.</p>
            </div>
            <div className="bg-myPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
            <h2 className='font-medium'>Lorem Ipsum</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>{moment().format('mm-dd-yyyy')}</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti harum fugiat facilis est ducimus esse mollitia numquam.</p>
            </div>
            <div className="bg-myYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
            <h2 className='font-medium'>Lorem Ipsum</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>{moment().format('mm-dd-yyyy')}</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate autem cumque et aliquam, ad quibusdam.</p>
            </div>
            </div>
        </div>
    );
};

export default Announcements;