import run from "aocrunner";

/**
 * @param {String} rawInput
 */
const parseInput = (rawInput) => rawInput;

/**
 * @param {String} rawInput
 */
const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  return input
    .split("\n")
    .map((line) => line.replace(RegExp(/[a-z]+/g), ""))
    .map((nums) => parseInt(nums.at(0) + nums.at(nums.length - 1)))
    .reduce((sum, num) => sum + num);
};

/**
 * @param {String} rawInput
 */
const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let output = input
    .split("\n")
    .map((line) => line.replace(RegExp(/\b(?!(?:and|not)\b)[a-z]+/g), ""))
    // .map((nums) => parseInt(nums.at(0) + nums.at(nums.length - 1)));
  return output;
};

run({
  part1: {
    tests: [
      {
        input: `
        1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet
        `,
        expected: "142",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen
        `,
        expected: "281",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});
