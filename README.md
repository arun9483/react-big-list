# react-big-list

render a big list (more than 100,000 records) using reactjs

# Performance optimization options

## Replace heavy npm package with light-weight npm package

### Google Lighthouse performance scores

- Performance score with [react-world-flags](https://www.npmjs.com/package/react-world-flags) was 49 with 100 elements
- Performance score with [react-country-flag](https://www.npmjs.com/package/react-country-flag) is 83 with 100 elements
- [react-country-flag vs react-world-flags](https://npmtrends.com/react-country-flag-vs-react-world-flags)

## Use virtualization

### Performance optimization statistics

- Performance score with with 1,00,000 elements without list virtualization
  - took 2 mins, 11 seconds to render items on page without lighthouse run.
  - lighthouse is unable to produce response.
  - lighthouse throwing error `There were issues affecting this run of Lighthouse`.
  - all the web-vitals are in `Error` state.
- Performance score with with 50,000 elements without list virtualization
  - took 45 seconds to render items on page without lighthouse run.
  - lighthouse is unable to produce response.
  - lighthouse throwing error `There were issues affecting this run of Lighthouse`.
  - all the web-vitals are in `Error` state.
- Performance score with with 10,000 elements without list virtualization
  - took 5 seconds to render items on page without lighthouse run.
  - lighthouse score is 36.

#### Using virtualization(react-window) to render list

- Performance score with with 1,00,000 elements with list virtualization
  - took < 3 seconds to render items on page.
  - 12 items displayed on screen and list was scrollable. Rest of items were displayed on scroll.
  - lighthouse score is 59.
    - First Contentful Paint : 1.6s
    - Largest Contentful Paint: 14.5s
    - Total Blocking Time: 170ms
    - Cumulative Layout Shift 0
    - Speed Index 2.7s
