//% color=#0fbc11 icon="\u265f" block="bit Operation"
namespace bit {
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
     * Convert number to binary string
     * @param n number, eg: 0x35fa
     */
    //% block="numberToBit %s"
    export function numberToBit(n: number): string {
        let hex="0123456789abcdef";
        let s = "";
        for (let i = 0; i < 32; i++) {
            s = hex.substr(n & 0x1,1) + s;
            n = n >> 1
        }
        return s;
    }
    /**
     * Convert number to hexadecimal string
     * @param n number, eg: 0x35fa
     */
    //% block="numberToHex %s"
    export function numberToHex(n: number): string {
        let hex="0123456789abcdef";
        let s = "";
        for (let i = 0; i < 8; i++) {
            s = hex.substr(n & 0xf,1) + s;
            n = n >> 4
        }
        return s;
    }
    /**
     * Convert hexadecimal string to number
     * @param s hexadecimal strings, eg: 1f
     */
    //% block="hexToNumver %s"
    export function hexToNumber(s: string): number {
        let hex="0123456789abcdef";
        let HEX="0123456789ABCDEF";
        let r = 0;
        for (let i = 0; i < s.length; i++) {
            if(hex.indexOf(s.charAt(i))!=-1)
                r = (r << 4) + hex.indexOf(s.charAt(i))
            else if (HEX.indexOf(s.charAt(i))!=-1)
                r = (r << 4) + HEX.indexOf(s.charAt(i))
            else
                r = (r << 4)
        }
        return r
    }
    /**
     * Convert decimal string to number
     * @param s decimal strings, eg: 123
     */
    //% block="strToNumver %s"
    export function strToNumber(s: string): number {
        let hex="0123456789";
        let r = 0;
        for (let i = 0; i < s.length; i++) {
            if(hex.indexOf(s.charAt(i))!=-1)
                r = (r * 10) + hex.indexOf(s.charAt(i))
            else
                r = (r * 10)
        }
        return r
    }
    /**
     * bit and
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a and %b"
    export function and(a: number, b: number): number {
        return a & b
    }
    /**
     * bit or
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a or %b"
    export function or(a: number, b: number): number {
        return a | b
    }
    /**
     * bit exclusive or
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a xor %b"
    export function xor(a: number, b: number): number {
        return a ^ b
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
     * bit Operation
     * @param a number, eg: 0x3221
     * @param b number, eg: 0xff33
     */
    //% block="%a %func %b"
    export function Operation(a: number,Func: func, b: number): number {
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
