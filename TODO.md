- Remove Redux. IMO, redux has little value and just adds more complexity in the app. If the app has more deeply nested components then I would maybe consider redux.
- Refactor MasterLayout.jsx. The way it's currently build is not flexible. For example what if I want a different way of displaying the nav section?, what if I want to style it differently. Same applies to the section area. Also, it assumes it's always going to have 2 column page.
  - I would instead make it compostable so it would look like this:
  - Before:
    <MasterLayout
      pageName="launches"
      renderBody={() => (
    <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
    </div>
    )}
    />
  - After:
    <MasterLayout pageName="launches">
      <MasterLayout.Nav>{getMenu()}</MasterLayout.Nav>
      <MasterLayout.section>{getSection()}</MasterLayout.section>
    </MasterLayout>
  - As you can see now I can compose the Master layout, I can potentially render a different nav on a different page, style it too.

- I would add a loading state when you click more info about the launch. Currently it's just waiting for the api call and showing the dropdown with info in it. This will be helpful for UX since the data might take a while to load and it's best practice to show user what's going on.
- Add pagination on the search result. In a prod environment, we wouldn't want to load all the data at once.

Optional
- Add apollo graphql
- Add some caching on the results. Maybe local storage?

