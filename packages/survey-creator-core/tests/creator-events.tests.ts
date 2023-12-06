import { CreatorTester } from "./creator-tester";

test("onElementDeleting: options.elementType contains cryptic numbers #4740", (): any => {
  const creator = new CreatorTester();
  let files: any;
  creator.onRemoveFile.add((_, options) => {
    files = options.files;
  });
  creator.onUploadFile.add((_, options) => {
    options.callback("success");
  });
  creator.uploadFiles([], {} as any, () => { }, { object: { file: "test.txt" }, propertyName: "file" });
  expect(files).toStrictEqual(["test.txt"]);
});