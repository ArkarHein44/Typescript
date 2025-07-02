// basic types
type Ty1 = "Hay" extends string ? true : false;
type Ty2 = "Hay" extends any ? true : false;
type Ty3 = "Hay" extends number ? true : false;
type Ty4 = "Hay" extends unknown ? true : false;
type Ty5 = string extends "Hay" ? true : false;
type Ty6 = 1500 extends string ? true : false;
type Ty7 = 1500 extends number ? true : false;
type Ty8 = 1500 extends any ? true : false;
type Ty9 = 1500 extends unknown ? true : false;
type Ty10 = number extends 1500 ? true : false;
type Ty11 = number extends string ? true : false;
type Ty12 = string extends number ? true : false;

// unknown check
type Ty13 = string extends unknown ? true : false;
type Ty14 = object extends unknown ? true : false;
type Ty15 = null extends unknown ? true : false;
type Ty16 = undefined extends unknown ? true : false;
type Ty17 = never extends unknown ? true : false;
type Ty18 = unknown extends unknown ? true : false;

// any check
type Ty19 = string extends any ? true : false;
type Ty20 = number extends any ? true : false;
type Ty21 = boolean extends any ? true : false;

// boolean check
type Ty22 = true extends boolean ? true : false;
type Ty23 = true extends string ? true : false;
type Ty24 = boolean extends true ? true : false;
type Ty25 = any extends any ? true : false;
type Ty26 = void extends any ? true : false;

// boolean check
type Ty27 = true extends boolean ? true : false;
type Ty28 = true extends string ? true : false;
type Ty29 = boolean extends true ? true : false;

// array check
type Ty30 = string[] extends any ? true : false;
type Ty31 = string[] extends any[] ? true : false;
type Ty32 = string[] extends string ? true : false;
type Ty33 = number[] extends any ? true : false;
type Ty34 = number[] extends any[] ? true : false;
type Ty35 = number[] extends number ? true : false;

// Union check
type Ty36 = string extends string | number ? true : false;
type Ty37 = string | number extends string ? true : false; // false **

// function check
type Ty38 = void extends Function ? true : false;

// tuple check
type Ty39 = [string, number] extends any[] ? true : false;

// never check (never represents a value that never exists)
type Ty40 = never extends string ? true : false;
type Ty41 = never extends number ? true : false;
type Ty42 = string extends never ? true : false;

// Extract ( Utality type)
type MixTypes =
  | "Hay"
  | 1500
  | ["Boy", "Girl"]
  | { brand: "Redbull"; price: 0 }
  | [10, 20, 30];

type Strings = Extract<MixTypes, string>;
type Numbers = Extract<MixTypes, number>;
type ProductOne = Extract<MixTypes, { brand: "Redbull"; price: 0 }>;
type ProductTwo = Extract<MixTypes, { price: 0 }>;
type ProductThree = Extract<MixTypes, { stock: 0 }>;
type ArrayOne = Extract<MixTypes, []>;
type ArrayThree = Extract<MixTypes, number[]>;
type ArrayFour = Extract<MixTypes, [unknown, unknown]>;

// Execlude ( Utality type)
type NotStrings = Exclude<MixTypes, string>;
type NotNumbers = Exclude<MixTypes, number>;
type NotProductOne = Exclude<MixTypes, { brand: "Redbull"; price: 0 }>;
type NotProductTwo = Extract<MixTypes, { stock: 0 }>;
type ArrayOnes = Extract<MixTypes, []>;
type ArrayTwos = Extract<MixTypes, string[]>;
type ArrayThrees = Extract<MixTypes, number[]>;

type NotPrimitives = Exclude<MixTypes, string | number>;
type NotArrays = Exclude<MixTypes, any[]>;
type NotSpecific = Exclude<MixTypes, "Hay" | 1500 | "Say Hi">;

// 2EC
