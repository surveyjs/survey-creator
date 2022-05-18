import { parsePropertyDescription } from "../../src/property-grid/description-parser";
test("Test markdown by one feature", () => {
  expect(parsePropertyDescription("fdfs**bold**fjdkslfj")).toEqual("fdfs<span class='spg-bold'>bold</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs_italic_fjdkslfj")).toEqual("fdfs<span class='spg-italic'>italic</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs`code`fjdkslfj")).toEqual("fdfs<span class='spg-code'>code</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs[aaa](bbb)fjdkslfj")).toEqual("fdfs<a class='spg-link' target='_blank' href='bbb'>aaa</a>fjdkslfj");
  expect(parsePropertyDescription("abc\negf")).toEqual("abc<br/>egf");
});
test("Test markdown by multipl;e feature", () => {
  expect(parsePropertyDescription("fdfs[aaa](bbb_cc_dd)fjdkslfj")).toEqual("fdfs<a class='spg-link' target='_blank' href='bbb_cc_dd'>aaa</a>fjdkslfj");
  expect(parsePropertyDescription("Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.")).
    toEqual("Refer to the <a class='spg-link' target='_blank' href='https://www.w3schools.com/tags/att_input_accept.asp'>accept</a> attribute description for more information.");
});