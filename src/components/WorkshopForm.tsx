const sessions = [
  {
  sessionCode: "EDU01",
  title: "Unlocking The Potential of Ingredient-let Beauty in Latin America",
  startDate: "Tuesday, January 21 at 12:45pm",
  endDate: "Tuesday, January 21 at 1:45pm",
  price: "$85",
},{
  sessionCode: "EDU02",
  title: "Crafting Great Products",
  startDate: "Tuesday, January 21 at 9:30am",
  endDate: "Tuesday, January 21 at 10:30am",
  price: "$140",
},{
  sessionCode: "EDU03",
  title: "Beauty Bytes: Build & Scale Your Brand Digitally",
  startDate: "Tuesday, January 21 at 11:15am",
  endDate: "Tuesday, January 21 at 12:15pm",
  price: "$150",
},{
  sessionCode: "EDU04",
  title: "How to Build a Winning Influencer Marketing Strategy",
  startDate: "Tuesday, January 21 at 12:30pm",
  endDate: "Tuesday, January 21 at 1:30pm",
  price: "$250",

},{
  sessionCode: "EDU05",
  title: "Activating Beauty Trends: How to build a responsive global marketing organization using AI+ HI",
  startDate: "Tuesday, January 21 at 2:30pm",
  endDate: "Tuesday, January 21 at 3:30pm",
  price: "$90",
},
];

const WorkShopForm: React.FC = () => {
  return (
    <>
      <div className="bg-white px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Session and events</h2>
          <div className="text-sm">
            Cart{" "}
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              1
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-2 w-1/3"
          />
          <button className="border rounded px-3 py-2">🔍</button>
          <button className="border rounded px-3 py-2">Filters</button>
          <button className="border rounded px-3 py-2">
            Show sold out sessions
          </button>
        </div>

        {/* Workshop Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            Sunday workshop full
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded">
            Monday workshop half day
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded">
            Monday workshop half day
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded">
            Monday workshop half day
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2">Session code</th>
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Start date</th>
                <th className="text-left p-2">End date</th>
                <th className="text-left p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">
                    <input type="checkbox" defaultChecked={i === 1} />{" "}
                    {session.sessionCode}
                  </td>
                  <td className="p-2">{session.title}</td>
                  <td className="p-2">{session.startDate}</td>
                  <td className="p-2">{session.endDate}</td>
                  <td className="p-2">{session.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <span>Page 1 of 10</span>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </>
  );
};

export default WorkShopForm;
