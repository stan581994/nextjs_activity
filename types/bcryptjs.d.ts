declare module 'bcryptjs' {
  /**
   * Synchronously generates a hash for the given string.
   * @param s The string to hash
   * @param salt The salt length to generate or the salt to use
   * @returns Resulting hash
   */
  export function hashSync(s: string, salt: string | number): string;

  /**
   * Synchronously tests a string against a hash.
   * @param s The string to compare
   * @param hash The hash to test against
   * @returns true if matching, otherwise false
   */
  export function compareSync(s: string, hash: string): boolean;

  /**
   * Gets the number of rounds used to encrypt a given hash.
   * @param hash Hash to extract the used number of rounds from
   * @returns Number of rounds used
   */
  export function getRounds(hash: string): number;

  /**
   * Generates a salt synchronously.
   * @param rounds Number of rounds to use, defaults to 10 if omitted
   * @returns Generated salt
   */
  export function genSaltSync(rounds?: number): string;

  /**
   * Generates a salt.
   * @param rounds Number of rounds to use, defaults to 10 if omitted
   * @param callback Callback receiving the error, if any, and the generated salt
   */
  export function genSalt(rounds: number, callback: (err: Error | null, salt: string) => void): void;
  export function genSalt(callback: (err: Error | null, salt: string) => void): void;
  export function genSalt(rounds?: number): Promise<string>;

  /**
   * Generates a hash for the given string.
   * @param s The string to hash
   * @param salt The salt to use, or the number of rounds to generate a salt
   * @param callback Callback receiving the error, if any, and the resulting hash
   */
  export function hash(s: string, salt: string | number, callback: (err: Error | null, hash: string) => void): void;
  export function hash(s: string, salt: string | number): Promise<string>;

  /**
   * Tests a string against a hash.
   * @param s The string to compare
   * @param hash The hash to test against
   * @param callback Callback receiving the error, if any, and the result
   */
  export function compare(s: string, hash: string, callback: (err: Error | null, success: boolean) => void): void;
  export function compare(s: string, hash: string): Promise<boolean>;
}
