// Conditional Types with infer (Inference Type)

// Syntax
// type Conditional<T> = T extends string ? true : false;

// exe 1
type IsString<T> = T extends string ? true : false;
type Tone = IsString<"hello">;
type Two = IsString<50>;

// Infer (Extract Type from Array)
// syntax
// type Conditional<T> = T extends SomePattern<infer U> ? U : Default TypeError;

//  Note  : CanvasPattern(infer U)[]
//        : number[] is extracted to number. after (infer U)
//        : is mean infer we can extract array

// exe1 (Extract Type from Array)
type SomeStructure<T> = T[];
type DefaultType = unknown;

type MyType<T> = T extends SomeStructure<infer U> ? U : DefaultType;

type NumberTyp = MyType<number[]>;
type BooleanType = MyType<boolean[]>;
type NoanArrayTyp = MyType<string>;

// exe2
type ExtractArray<T> = T extends (infer U)[] ? U : "Not an array";

type T1 = ExtractArray<string[]>;
type T2 = ExtractArray<number[]>;
type T3 = ExtractArray<50>;

// exe 3 (Extract Type from Array)
type ArrayElementType<T> = T extends (infer U)[] ? U : T;

type stringsT = ArrayElementType<string[]>;
type NumbersT = ArrayElementType<number[]>;
type MixedT = ArrayElementType<Array<number | string>>;
type NotanArrayBooleanT = ArrayElementType<boolean>;
type NotanArrayT = ArrayElementType<50>;

// => Nested Inter (Extract Type from Array)
type DeepArray<T> = T[][];
type NstArray<T> = T extends DeepArray<infer U>
  ? U
  : T extends (infer V)[]
  ? V
  : "not an array";

type NestType1 = NstArray<number[][]>;
type NestType2 = NstArray<string[]>;
type NestType3 = NstArray<number>;

// 9IF
