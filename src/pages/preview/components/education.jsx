const Education = ({education}) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">EDUCATION</h1>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold text-blue-600">Services Basic</p>
          <p className="text-gray-700">At Services, I studied hard and had fun with friends.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold text-blue-600">Kumasi Girls' SHS</p>
          <p className="text-gray-700">At Kumasi Girls' SHS, I learned from great teachers.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold text-blue-600">GIJ</p>
          <p className="text-gray-700">GIJ was amazing because I learned a lot and met many smart people.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold text-blue-600">Stanford University</p>
          <p className="text-gray-700">At Stanford University, </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold text-blue-600">Mest Africa</p>
          <p className="text-gray-700">Mest was wonderful because I learned a lot and made good friends.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
