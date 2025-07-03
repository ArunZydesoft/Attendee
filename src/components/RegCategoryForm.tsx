const RegCategoryForm: React.FC = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Conference options */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-4">Conference options</h3>
          <div className="space-y-4">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              <span className="font-medium">
                Surpass – IMS, RFIC, and ARFTG sessions
              </span>
              <p className="text-sm text-gray-600">
                Surpass registration includes: all IMS, RFIC, ARFTG technical
                sessions and electronic proceedings; one full-day workshop or
                bootcamp 9or two half-day workshops or half-day bootcamps)
                electronic proceedings for all workshop days
              </p>
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              <span className="font-medium">IMS sessions</span>
              <p className="text-sm text-gray-600">
                Surpass registration includes: all IMS, RFIC, ARFTG technical
                sessions and electronic proceedings; one full-day workshop or
                bootcamp 9or two half-day workshops or half-day bootcamps)
                electronic proceedings for all workshop days
              </p>
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              <span className="font-medium">IMS single day</span>
              <p className="text-sm text-gray-600">
                Surpass registration includes: all IMS, RFIC, ARFTG technical
                sessions and electronic proceedings; one full-day workshop or
                bootcamp 9or two half-day workshops or half-day bootcamps)
                electronic proceedings for all workshop days
              </p>
            </label>
          </div>
        </div>

        {/* Workshop options */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-4">
            Workshop / Boot camp / Technical lecture only
          </h3>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            <span className="font-medium">
              Workshop / Boot camp / Technical lecture only
            </span>
            <p className="text-sm text-gray-600">
              Please select this category if you only plan on attending
              workshops, Bootcamps and technical lectures
            </p>
          </label>
        </div>

        {/* Exhibit only options */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-4">Exhibit hall only options</h3>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            <span className="font-medium">Exhibit only pass</span>
            <p className="text-sm text-gray-600">
              Exhibition registration includes access to the IMS plenary session
              and welcome reception on monday.
            </p>
          </label>
        </div>
      </div>
    </>
  );
};

export default RegCategoryForm;
