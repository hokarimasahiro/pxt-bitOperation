//% weight=100 color=#0fbc11 icon=""
namespace bitsFunction {
    export enum func{
        //% block=xor
        xor=0,
        //% block=or
        or=1,
        //% block=and
        and=2,
        //% block="<<"
        shiftLeft=4,
        //% block=">>"
        shiftRight=5
    }
    /**
     * Convert hexadecimal string to number
     * @param s hexadecimal strings, eg: 1f
     */
    //% block="hexToNumver %s"
    export function hex2number(s: string): number {
        let r = 0
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) <= 0x39)
                r = (r << 4) + s.charCodeAt(i) - 0x30
            else if (s.charCodeAt(i) <= 0x46)
                r = (r << 4) + s.charCodeAt(i) - 0x41 + 10
            else
                r = (r << 4) + s.charCodeAt(i) - 0x61 + 10
        }
        return r
    }
    /**
     * Logical value of the bit at the specified position
     * @param n number, eg: 0x0010
     * @param b bit position, eg: 2
     */
    //% block="%n at position %b"
    export function bittest(n: number, b: number): boolean {
        if ((n & 1 << b) != 0)
            return true
        else
            return false
    }
    /**
     * value of the bit at the specified position
     * @param n number, eg: 0x0010
     * @param b bit position, eg: 2
     */
    //% block="%n at position %b"
    export function bittestN(n: number, b: number): number {
        if ((n & 1 << b) != 0)
            return 1;
        else
            return 0;
    }
    /**
     * bits and
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a and %b"
    export function and(a: number, b: number): number {
        return a & b
    }
    /**
     * bits or
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a or %b"
    export function or(a: number, b: number): number {
        return a | b
    }
    /**
     * bits exclusive or
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a xor %b"
    export function xor(a: number, b: number): number {
        return a ^ b
    }
    /**
     * invert bits
     * @param a number, eg: 0x3221
     */
    //% block="invert %a"
    export function invert(a: number): number {
        return ~a;
    }
    /**
     * shift left
     * @param a number, eg: 0x3221
     * @param b number, eg: 2
     */
    //% block="%a << %b"
    export function lshift(a: number, b: number): number {
        return a << b
    }
    /**
     * shift right
     * @param a number, eg: 0x3221
     * @param b number, eg: 2
     */
    //% block="%a >> %b"
    export function rshift(a: number, b: number): number {
        return a >>> b
    }
    /**
     * logical function
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a %func %b"
    export function bitsFunction(a: number,Func: func, b: number): number {
        switch(Func){
            case func.xor:return xor(a,b);
            case func.or: return or(a, b);
            case func.and: return and(a, b);
            case func.shiftLeft: return lshift(a, b);
            case func.shiftRight: return rshift(a, b);
        }
        return 0;
    }
    /**
     * show number for hexadecimal format
     * @param n number, eg: 12345
     */
    //% block="show number %n"
    export function ShowNumber(n: number): void {
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 4; x++) {
                if ((n & 1 << (19 - (y * 4 + x))) != 0) led.plot(y, x+1)
                else led.unplot(y, x+1)
            }
        }
    }
}
