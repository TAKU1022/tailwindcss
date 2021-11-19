export default function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container m-auto px-4 py-20 bg-purple-50 ">
      <h1 className="text-center text-gray-700 text-3xl font-bold">
        タイトル１
      </h1>
      <ul className="grid grid-cols-3 gap-4 mt-6">
        {array.map((number) => (
          <li className="border-2 border-pink-300 text-center p-4" key={number}>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-full w-14 h-14 border-2 border-gray-500 mr-2"></div>
              <div>
                <p className="text-gray-700 text-lg">ダミーテキスト{number}</p>
                <p className="text-gray-700 text-lg">ダミーテキスト{number}</p>
                <p className="text-gray-700 text-lg">ダミーテキスト{number}</p>
              </div>
            </div>
            <button className="rounded bg-green-400 text-gray-100 py-1 px-4 mt-2 transition-all hover:bg-green-500">
              DOする
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
