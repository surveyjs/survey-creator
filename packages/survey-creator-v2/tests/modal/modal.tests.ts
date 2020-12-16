import { ModalUtils } from "../../src/components/modal";

const targetRect = {
  left: 20,
  top: 20,
  width: 50,
  height: 50,
  right: 70,
  bottom: 70,
};

test("Check calculatePosition method", () => {
  expect(
    ModalUtils.calculatePosition(<any>targetRect, 10, 20, "top", "left", false)
  ).toEqual({ left: 0, top: 10 });

  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "top",
      "center",
      false
    )
  ).toEqual({ left: 35, top: 10 });

  expect(
    ModalUtils.calculatePosition(<any>targetRect, 10, 20, "top", "right", false)
  ).toEqual({ left: 70, top: 10 });
  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "middle",
      "left",
      false
    )
  ).toEqual({ left: 0, top: 40 });
  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "middle",
      "center",
      false
    )
  ).toEqual({ left: 35, top: 40 });
  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "middle",
      "right",
      false
    )
  ).toEqual({ left: 70, top: 40 });

  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "bottom",
      "left",
      false
    )
  ).toEqual({ left: 0, top: 70 });
  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "bottom",
      "center",
      false
    )
  ).toEqual({ left: 35, top: 70 });
  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "bottom",
      "right",
      false
    )
  ).toEqual({ left: 70, top: 70 });

  //cases with pointer
  expect(
    ModalUtils.calculatePosition(<any>targetRect, 10, 20, "top", "left", true)
  ).toEqual({ left: 0, top: 60 });

  expect(
    ModalUtils.calculatePosition(<any>targetRect, 10, 20, "top", "right", true)
  ).toEqual({ left: 70, top: 60 });

  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "bottom",
      "left",
      true
    )
  ).toEqual({ left: 0, top: 20 });

  expect(
    ModalUtils.calculatePosition(
      <any>targetRect,
      10,
      20,
      "bottom",
      "right",
      true
    )
  ).toEqual({ left: 70, top: 20 });
});

test("Check calculatateDirection method", () => {
  expect(ModalUtils.calculateModalDirection("top", "left")).toEqual("left");

  expect(ModalUtils.calculateModalDirection("top", "center")).toEqual("top");

  expect(ModalUtils.calculateModalDirection("top", "right")).toEqual("right");
  expect(ModalUtils.calculateModalDirection("middle", "left")).toEqual("left");
  expect(ModalUtils.calculateModalDirection("middle", "center")).toEqual(
    undefined
  );
  expect(ModalUtils.calculateModalDirection("middle", "right")).toEqual(
    "right"
  );
  expect(ModalUtils.calculateModalDirection("bottom", "left")).toEqual("left");
  expect(ModalUtils.calculateModalDirection("bottom", "center")).toEqual(
    "bottom"
  );
  expect(ModalUtils.calculateModalDirection("bottom", "right")).toEqual(
    "right"
  );
});

test("Check calculatePointer target method", () => {
  expect(
    ModalUtils.calculatePointerTarget(<any>targetRect, 10, 10, "top", "left")
  ).toEqual({ left: 10, top: 35 });

  expect(
    ModalUtils.calculatePointerTarget(<any>targetRect, 10, 10, "top", "center")
  ).toEqual({ left: 35, top: 10 });

  expect(
    ModalUtils.calculatePointerTarget(<any>targetRect, 10, 10, "top", "right")
  ).toEqual({ left: 60, top: 35 });
  expect(
    ModalUtils.calculatePointerTarget(<any>targetRect, 10, 10, "middle", "left")
  ).toEqual({ left: 10, top: 35 });
  expect(
    ModalUtils.calculatePointerTarget(
      <any>targetRect,
      10,
      20,
      "middle",
      "center"
    )
  ).toEqual({ left: NaN, top: NaN });
  expect(
    ModalUtils.calculatePointerTarget(
      <any>targetRect,
      10,
      10,
      "middle",
      "right"
    )
  ).toEqual({ left: 60, top: 35 });

  expect(
    ModalUtils.calculatePointerTarget(<any>targetRect, 10, 10, "bottom", "left")
  ).toEqual({ left: 10, top: 35 });
  expect(
    ModalUtils.calculatePointerTarget(
      <any>targetRect,
      10,
      10,
      "bottom",
      "center"
    )
  ).toEqual({ left: 35, top: 60 });
  expect(
    ModalUtils.calculatePointerTarget(
      <any>targetRect,
      10,
      10,
      "bottom",
      "right"
    )
  ).toEqual({ left: 60, top: 35 });
});
