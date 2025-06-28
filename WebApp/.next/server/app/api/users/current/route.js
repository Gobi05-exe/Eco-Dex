/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/current/route";
exports.ids = ["app/api/users/current/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fcurrent%2Froute&page=%2Fapi%2Fusers%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fcurrent%2Froute.ts&appDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fcurrent%2Froute&page=%2Fapi%2Fusers%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fcurrent%2Froute.ts&appDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Arjun_Desktop_BankEase_Copies_Nexathon_EcoDex_web_dev_app_api_users_current_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/current/route.ts */ \"(rsc)/./app/api/users/current/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/current/route\",\n        pathname: \"/api/users/current\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/current/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Arjun\\\\Desktop\\\\BankEase Copies\\\\Nexathon\\\\EcoDex\\\\web-dev\\\\app\\\\api\\\\users\\\\current\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Arjun_Desktop_BankEase_Copies_Nexathon_EcoDex_web_dev_app_api_users_current_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmN1cnJlbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGY3VycmVudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGY3VycmVudCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBcmp1biU1Q0Rlc2t0b3AlNUNCYW5rRWFzZSUyMENvcGllcyU1Q05leGF0aG9uJTVDRWNvRGV4JTVDd2ViLWRldiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQXJqdW4lNUNEZXNrdG9wJTVDQmFua0Vhc2UlMjBDb3BpZXMlNUNOZXhhdGhvbiU1Q0Vjb0RleCU1Q3dlYi1kZXYmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lEO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBcmp1blxcXFxEZXNrdG9wXFxcXEJhbmtFYXNlIENvcGllc1xcXFxOZXhhdGhvblxcXFxFY29EZXhcXFxcd2ViLWRldlxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGN1cnJlbnRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL2N1cnJlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9jdXJyZW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9jdXJyZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQXJqdW5cXFxcRGVza3RvcFxcXFxCYW5rRWFzZSBDb3BpZXNcXFxcTmV4YXRob25cXFxcRWNvRGV4XFxcXHdlYi1kZXZcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxjdXJyZW50XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fcurrent%2Froute&page=%2Fapi%2Fusers%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fcurrent%2Froute.ts&appDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/users/current/route.ts":
/*!****************************************!*\
  !*** ./app/api/users/current/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/mongodb */ \"(rsc)/./utils/mongodb.ts\");\n// /app/api/user/current/route.ts\n\n\n// Importing cookie/session library (for example, if you're using next-auth or a similar library)\n// You can use Redis if you set up session storage with Redis\nasync function GET(request) {\n    try {\n        // Assuming you have stored the username in a cookie or session\n        const cookie = request.cookies.get('username'); // Fetch username from cookie\n        if (!cookie) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Username not found'\n            }, {\n                status: 401\n            });\n        }\n        const username = cookie.value; // Extract username value from the cookie\n        // Connect to MongoDB and retrieve documents\n        const { db } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const collectionName = `${username}_waste_records`;\n        console.log(\"Collection name:\", collectionName); // Debugging line\n        const collection = db.collection(collectionName);\n        const documents = await collection.find({}).toArray();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(documents);\n    } catch (error) {\n        console.error('Error fetching records:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch records'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL2N1cnJlbnQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQWlDO0FBQ3VCO0FBQ0o7QUFDcEQsaUdBQWlHO0FBQ2pHLDZEQUE2RDtBQUV0RCxlQUFlRSxJQUFJQyxPQUFvQjtJQUMxQyxJQUFJO1FBQ0EsK0RBQStEO1FBQy9ELE1BQU1DLFNBQVNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsNkJBQTZCO1FBRTdFLElBQUksQ0FBQ0YsUUFBUTtZQUNULE9BQU9KLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBcUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzVFO1FBRUEsTUFBTUMsV0FBV04sT0FBT08sS0FBSyxFQUFFLHlDQUF5QztRQUV4RSw0Q0FBNEM7UUFDNUMsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNWCxpRUFBaUJBO1FBQ3RDLE1BQU1ZLGlCQUFpQixHQUFHSCxTQUFTLGNBQWMsQ0FBQztRQUNsREksUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkYsaUJBQWlCLGlCQUFpQjtRQUVsRSxNQUFNRyxhQUFhSixHQUFHSSxVQUFVLENBQUNIO1FBQ2pDLE1BQU1JLFlBQVksTUFBTUQsV0FBV0UsSUFBSSxDQUFDLENBQUMsR0FBR0MsT0FBTztRQUVuRCxPQUFPbkIscURBQVlBLENBQUNPLElBQUksQ0FBQ1U7SUFDN0IsRUFBRSxPQUFPVCxPQUFPO1FBQ1pNLFFBQVFOLEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRjtBQUNKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFyanVuXFxEZXNrdG9wXFxCYW5rRWFzZSBDb3BpZXNcXE5leGF0aG9uXFxFY29EZXhcXHdlYi1kZXZcXGFwcFxcYXBpXFx1c2Vyc1xcY3VycmVudFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwcC9hcGkvdXNlci9jdXJyZW50L3JvdXRlLnRzXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnQC91dGlscy9tb25nb2RiJztcclxuLy8gSW1wb3J0aW5nIGNvb2tpZS9zZXNzaW9uIGxpYnJhcnkgKGZvciBleGFtcGxlLCBpZiB5b3UncmUgdXNpbmcgbmV4dC1hdXRoIG9yIGEgc2ltaWxhciBsaWJyYXJ5KVxyXG4vLyBZb3UgY2FuIHVzZSBSZWRpcyBpZiB5b3Ugc2V0IHVwIHNlc3Npb24gc3RvcmFnZSB3aXRoIFJlZGlzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIHN0b3JlZCB0aGUgdXNlcm5hbWUgaW4gYSBjb29raWUgb3Igc2Vzc2lvblxyXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3VzZXJuYW1lJyk7IC8vIEZldGNoIHVzZXJuYW1lIGZyb20gY29va2llXHJcblxyXG4gICAgICAgIGlmICghY29va2llKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlcm5hbWUgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBjb29raWUudmFsdWU7IC8vIEV4dHJhY3QgdXNlcm5hbWUgdmFsdWUgZnJvbSB0aGUgY29va2llXHJcblxyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gTW9uZ29EQiBhbmQgcmV0cmlldmUgZG9jdW1lbnRzXHJcbiAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IGAke3VzZXJuYW1lfV93YXN0ZV9yZWNvcmRzYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbGxlY3Rpb24gbmFtZTpcIiwgY29sbGVjdGlvbk5hbWUpOyAvLyBEZWJ1Z2dpbmcgbGluZVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRvY3VtZW50cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlY29yZHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHJlY29yZHMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiR0VUIiwicmVxdWVzdCIsImNvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VybmFtZSIsInZhbHVlIiwiZGIiLCJjb2xsZWN0aW9uTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnRzIiwiZmluZCIsInRvQXJyYXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/current/route.ts\n");

/***/ }),

/***/ "(rsc)/./utils/mongodb.ts":
/*!**************************!*\
  !*** ./utils/mongodb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nlet client = null;\nlet db = null;\nconst uri = process.env.MONGODB_URI; // MongoDB connection string from environment variables\nconst dbName = process.env.MONGODB_DB; // Database name from environment variables\nif (!uri || !dbName) {\n    throw new Error('Please define the MONGODB_URI and MONGODB_DB environment variables');\n}\nasync function connectToDatabase() {\n    if (client && db) {\n        // Return existing connection if available\n        return {\n            client,\n            db\n        };\n    }\n    // Otherwise, create a new client instance and connect\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    await client.connect();\n    db = client.db(dbName);\n    console.log('Connected to MongoDB');\n    return {\n        client,\n        db\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9tb25nb2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUUxQyxJQUFJQyxTQUE2QjtBQUNqQyxJQUFJQyxLQUFnQjtBQUNwQixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBWSx1REFBdUQ7QUFDdEcsTUFBTUMsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxVQUFVLEVBQVksMkNBQTJDO0FBRTVGLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxRQUFRO0lBQ25CLE1BQU0sSUFBSUUsTUFBTTtBQUNsQjtBQUVPLGVBQWVDO0lBQ3BCLElBQUlULFVBQVVDLElBQUk7UUFDaEIsMENBQTBDO1FBQzFDLE9BQU87WUFBRUQ7WUFBUUM7UUFBRztJQUN0QjtJQUVBLHNEQUFzRDtJQUN0REQsU0FBUyxJQUFJRCxnREFBV0EsQ0FBQ0c7SUFDekIsTUFBTUYsT0FBT1UsT0FBTztJQUNwQlQsS0FBS0QsT0FBT0MsRUFBRSxDQUFDSztJQUVmSyxRQUFRQyxHQUFHLENBQUM7SUFFWixPQUFPO1FBQUVaO1FBQVFDO0lBQUc7QUFDdEIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJqdW5cXERlc2t0b3BcXEJhbmtFYXNlIENvcGllc1xcTmV4YXRob25cXEVjb0RleFxcd2ViLWRldlxcdXRpbHNcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIERiIH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5sZXQgY2xpZW50OiBNb25nb0NsaWVudCB8IG51bGwgPSBudWxsO1xyXG5sZXQgZGI6IERiIHwgbnVsbCA9IG51bGw7XHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZzsgLy8gTW9uZ29EQiBjb25uZWN0aW9uIHN0cmluZyBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlc1xyXG5jb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5NT05HT0RCX0RCIGFzIHN0cmluZzsgLy8gRGF0YWJhc2UgbmFtZSBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlc1xyXG5cclxuaWYgKCF1cmkgfHwgIWRiTmFtZSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgYW5kIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGVzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoY2xpZW50ICYmIGRiKSB7XHJcbiAgICAvLyBSZXR1cm4gZXhpc3RpbmcgY29ubmVjdGlvbiBpZiBhdmFpbGFibGVcclxuICAgIHJldHVybiB7IGNsaWVudCwgZGIgfTtcclxuICB9XHJcblxyXG4gIC8vIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IGNsaWVudCBpbnN0YW5jZSBhbmQgY29ubmVjdFxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgZGIgPSBjbGllbnQuZGIoZGJOYW1lKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcblxyXG4gIHJldHVybiB7IGNsaWVudCwgZGIgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjbGllbnQiLCJkYiIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsIk1PTkdPREJfREIiLCJFcnJvciIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fcurrent%2Froute&page=%2Fapi%2Fusers%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fcurrent%2Froute.ts&appDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArjun%5CDesktop%5CBankEase%20Copies%5CNexathon%5CEcoDex%5Cweb-dev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();