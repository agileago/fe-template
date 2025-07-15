import { defineComponent } from 'vue'

const FigmaView = defineComponent({
  name: 'FigmaView',
  setup() {
    return () => (
      <div class="min-h-screen bg-gray-50">
        {/* 侧边栏 */}
        <div class="fixed left-0 top-0 h-full w-64 border-r border-gray-200 bg-white shadow-lg">
          {/* Logo */}
          <div class="flex items-center border-b border-gray-200 px-6 py-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span class="text-sm font-bold text-white">BW</span>
            </div>
            <span class="ml-3 text-lg font-semibold text-gray-900">ByeWind</span>
          </div>

          {/* 导航菜单 */}
          <nav class="mt-6 px-3">
            <div class="space-y-1">
              {/* Favorites */}
              <div class="px-3 py-2 text-xs font-medium uppercase tracking-wider text-gray-500">Favorites</div>
              <a
                href="#"
                class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Overview
              </a>
              <a
                href="#"
                class="group flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white"
              >
                <svg class="mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Projects
              </a>

              {/* Recently */}
              <div class="mt-6 px-3 py-2 text-xs font-medium uppercase tracking-wider text-gray-500">Recently</div>
              <a
                href="#"
                class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                Home
              </a>
              <a
                href="#"
                class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Inbox
              </a>
              <a
                href="#"
                class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                My Task
              </a>
            </div>
          </nav>
        </div>

        {/* 主内容区域 */}
        <div class="ml-64">
          {/* 顶部导航栏 */}
          <header class="border-b border-gray-200 bg-white shadow-sm">
            <div class="flex items-center justify-between px-6 py-4">
              {/* 搜索栏 */}
              <div class="max-w-lg flex-1">
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    class="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* 右侧操作区 */}
              <div class="flex items-center space-x-4">
                {/* 通知 */}
                <button class="relative p-2 text-gray-400 hover:text-gray-500">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-5 5v-5zM10.07 2.82l3.12 3.12M7.05 5.84l3.12 3.12M4.03 8.86l3.12 3.12M1.01 11.88l3.12 3.12"
                    />
                  </svg>
                  <span class="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>

                {/* 主题切换 */}
                <button class="p-2 text-gray-400 hover:text-gray-500">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>

                {/* 用户头像 */}
                <div class="flex items-center space-x-3">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                  <div class="hidden md:block">
                    <div class="text-sm font-medium text-gray-900">Tom Cook</div>
                    <div class="text-xs text-gray-500">tom@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* 主要内容 */}
          <main class="p-6">
            {/* 页面标题 */}
            <div class="mb-6">
              <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <p class="text-gray-600">Welcome back! Here's what's happening with your projects today.</p>
            </div>

            {/* 统计卡片 */}
            <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div class="rounded-lg bg-white p-6 shadow">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                      <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Total Projects</p>
                    <p class="text-2xl font-semibold text-gray-900">24</p>
                  </div>
                  <div class="ml-auto">
                    <span class="inline-flex items-center text-sm text-green-600">
                      <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white p-6 shadow">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                      <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Active Users</p>
                    <p class="text-2xl font-semibold text-gray-900">1,429</p>
                  </div>
                  <div class="ml-auto">
                    <span class="inline-flex items-center text-sm text-green-600">
                      <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      8%
                    </span>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white p-6 shadow">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100">
                      <svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Revenue</p>
                    <p class="text-2xl font-semibold text-gray-900">$89,432</p>
                  </div>
                  <div class="ml-auto">
                    <span class="inline-flex items-center text-sm text-red-600">
                      <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        />
                      </svg>
                      3%
                    </span>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white p-6 shadow">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                      <svg class="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p class="text-2xl font-semibold text-gray-900">3.24%</p>
                  </div>
                  <div class="ml-auto">
                    <span class="inline-flex items-center text-sm text-green-600">
                      <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      5%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 图表和表格区域 */}
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* 图表卡片 */}
              <div class="rounded-lg bg-white p-6 shadow">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-lg font-medium text-gray-900">Analytics Overview</h3>
                  <select class="rounded-md border-gray-300 text-sm">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div class="flex h-64 items-center justify-center rounded-lg bg-gray-50">
                  <p class="text-gray-500">Chart placeholder</p>
                </div>
              </div>

              {/* 最近活动 */}
              <div class="rounded-lg bg-white p-6 shadow">
                <h3 class="mb-4 text-lg font-medium text-gray-900">Recent Activity</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">Sarah Johnson</p>
                      <p class="text-sm text-gray-500">Created new project "Mobile App Redesign"</p>
                    </div>
                    <span class="text-xs text-gray-400">2h ago</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">Michael Chen</p>
                      <p class="text-sm text-gray-500">Completed task "User Interface Updates"</p>
                    </div>
                    <span class="text-xs text-gray-400">4h ago</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">David Wilson</p>
                      <p class="text-sm text-gray-500">Added 3 new team members</p>
                    </div>
                    <span class="text-xs text-gray-400">6h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  },
})

export default FigmaView
