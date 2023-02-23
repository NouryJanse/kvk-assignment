# KvK assignment by Noury Janse 23-02-23

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn tailwind`

Generates the Tailwind styling

## Features & implementations

- Redux store that saves data, API services, and allows for local filtering (if that would be desired in the future)
- React routing with a separated detailpage for company data (is fetched only once, also when reopened again).
- Homepage company data is only listed once and a separate list is used for the search queries.
- Toasters are used for error messages when the endpoint is down and if results are found.
- There has been put extensive thought in keeping the application operational when refreshing the app on the detailpage.
- A little look into component separation.
- Some KvK design styling
- UX feature that debounces the input field but also auto searches AND doesn't refetch the company data when the field is emptied.
- A little responsive design on the homepage, could be improved a lot of course.

## Notes / Comments

- TESTS: There's no test for the homepage to test for the expected elements. It would take too much time to setup the test configuration with Redux injection. Please take a look at my recipe app where that works completely [here](https://github.com/NouryJanse/recipes/blob/main/app/src/App.test.tsx) and [here](https://github.com/NouryJanse/recipes/blob/main/app/src/components/pages/Dashboard/Dashboard.test.tsx). Finally, this application contains a test at the Button atom component [here](https://github.com/NouryJanse/kvk-assignment/blob/main/src/components/atoms/Button/Button.test.tsx).
