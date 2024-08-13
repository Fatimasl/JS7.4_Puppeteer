let page;

beforeEach(async () => {
  page = await browser.newPage();
  //await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

    beforeEach(async () => {
      await page.goto("https://github.com/team");
    });

    test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");//'GitHub: Where the world builds software · GitHub');
  }, 70000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")//Sign up for free");
  }, 50000);
});

test("Actions: the h1 header content'", async () => {
  await page.goto("https://github.com/features/actions");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Features • GitHub Actions · GitHub");
}, 80000);

test("Healthcare: the h1 header content'", async () => {
  await page.goto("https://github.com/solutions/industries/healthcare");
  await page.waitForSelector("h1");
  const title4 = await page.title();
  expect(title4).toEqual("Healthcare solutions · GitHub");
}, 55000);

test("Sponsors: the h1 header content'", async () => {
  await page.goto("https://github.com/sponsors");
  await page.waitForSelector("h1");
  const title4 = await page.title();
  expect(title4).toEqual("GitHub Sponsors · GitHub");
}, 65000);