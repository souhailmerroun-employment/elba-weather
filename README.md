# elba-weather

Run `npm install` to install dependencies.

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/package.json#L11-L29

Run `npm run dev` to start the development server.

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/package.json#L5-L10

Upon loading the `middleware` detects the nearby city 

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/pages/_middleware.tsx#L1-L12

It redirects then to 

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/pages/%5Bcity%5D.tsx#L8-L48

_

The app has a `context`

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/pages/%5Bcity%5D.tsx#L12

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/src/cities/CityProvider.tsx#L17-L24

That is made of a `citiesCollectionHook`

https://github.com/souhailmerroun-employment/elba-weather/blob/fc1161c25402f612bc5654f161ee8f4a70461983/src/cities/useCities.tsx#L30-L65