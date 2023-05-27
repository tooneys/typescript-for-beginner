/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;
type NewNullType = null;
type MaleOrFemale = 'male' | 'female';

const stringVar: string = 'test';

type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: '안유진',
  year: 2003,
};

/**
 * Interface
 *
 * Type보다 뒤늦게 생긴 기능
 * 겹치는 부분이 꽤나 있다
 *
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2003,
};

interface Idolif {
  name: NewStringType;
  year: NewNullType;
}

/**
 * optional 기능
 */

type IdolType2 = {
  name: string;
  year?: number;
};

interface IdolOptional {
  name: string;
  yaer?: number;
}

const yuJin3: IdolOptional = {
  name: '안유진',
};

const yuJin4: IdolType2 = {
  name: '안유진',
  // year: 2003,
};
