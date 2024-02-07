module.exports = {
    tags: {
        include: ['test-only', 'pages'],
        exclude: ['no-tests', 'tokens'],
        skip: ['skip-test', 'layout'],
      },
    // Hook that is executed before the test runner starts running tests
    setup() {
      // Add your configuration here.
    },
    /* Hook to execute before a story is initially visited before being rendered in the browser.
     * The page argument is the Playwright's page object for the story.
     * The context argument is a Storybook object containing the story's id, title, and name.
     */
    async preVisit(page, context) {
      // Add your configuration here.
    },
    /* Hook to execute after a story is visited and fully rendered.
     * The page argument is the Playwright's page object for the story
     * The context argument is a Storybook object containing the story's id, title, and name.
     */
    async postVisit(page, context) {
      // Add your configuration here.
    },
  };