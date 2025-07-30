import { BigNumber, ethers } from "ethers";

const format = {
  moveDecimalLeft: (str: string, count: number) => {
    let start = str.length - count;
    let prePadding = "";

    while (start < 0) {
      prePadding += "0";
      start += 1;
    }

    str = prePadding + str;
    let result = str.slice(0, start) + "." + str.slice(start);
    if (result[0] == ".") {
      result = "0" + result;
    }

    return result;
  },
  BN256ToBin: (str: string) => {
    const r = BigInt(str).toString(2);
    let prePadding = "";
    const paddingAmount = 256 - r.length;
    for (let i = 0; i < paddingAmount; i++) {
      prePadding += "0";
    }
    return prePadding + r;
  },
  BN256ToHex: (n: number) => {
    let nstr = BigInt(n).toString(16);
    while (nstr.length < 64) {
      nstr = "0" + nstr;
    }

    return parseInt(nstr, 16);
  },
  BNToDecimal: (bn: BigNumber) => {
    return ethers.BigNumber.from(bn).toString();
  },
  reverseCoordinate: (p: Array<number>) => {
    const r = [0, 0];
    r[0] = p[1];
    r[1] = p[0];
    return r;
  },
};

export default format;
