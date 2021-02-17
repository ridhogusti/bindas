import './index.css';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={logo} alt="ChitChat Logo" className="h-12 w-12 transition delay-75 transform hover:rotate-180" />
        </div>
        <div>
          <div className="text-xl font-medium text-black hover:text-red-700 ">ChitChat</div>
          <p className="text-gray-500">You have a new message</p>
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        {
          [1, 2, 3, 4, 5].map(item => {
            return (
              <div class="mt-10 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face" />
                <div class="text-center space-y-2 sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                      Erin Lindford
            </p>
                    <p class="text-gray-500 font-medium">
                      Product Engineer
            </p>
                  </div>
                  <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>

  );
}

export default App;
