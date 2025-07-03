const options = [
  {
    title: "Surpass – IMS, RFIC, and ARFTG sessions",
    description:
      "Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half – day bootcamps) electronic proceedings for all workshop days",
  },
  {
    title: "IMS sessions",
    description:
      "Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half – day bootcamps) electronic proceedings for all workshop days",
  },
  {
    title: "IMS single day",
    description:
      "Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half – day bootcamps) electronic proceedings for all workshop days",
  },
];

const SessionsEventForm: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Conference options</h3>
        <div className="space-y-6">
          {options.map((opt, i) => (
            <label key={i} className="flex gap-3 items-start">
              <input type="checkbox" className="mt-1" />
              <div>
                <span className="font-semibold text-sm text-gray-800 block mb-1">
                  {opt.title}
                </span>
                <p className="text-sm text-gray-600 leading-snug border-t border-gray-200 pt-2">
                  {opt.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default SessionsEventForm;
