export default function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container m-auto px-4 py-20 bg-purple-50 ">
      <h1 className="text-center text-gray-900 text-3xl font-bold">
        タイトル１
      </h1>
      <ul className="grid grid-cols-3 gap-6 mt-6">
        {array.map((number) => (
          <li key={number}>
            <div className="border-2 border-pink-300  p-4 flex justify-center items-center">
              <div className="bg-white rounded-full w-14 h-14 border-2 border-gray-500 mr-2"></div>
              <div>
                <p>ダミーテキスト{number}</p>
                <p>ダミーテキスト{number}</p>
                <p>ダミーテキスト{number}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
