/** A file generated by the application */
export class InputFileGeneratedBaseModel {
  public _: 'inputFileGenerated'

  /**
   * Local path to a file from which the file is generated; may be empty if there is no
   * such file
   */
  public originalPath: string

  /**
   * String specifying the conversion applied to the original file; must be persistent
   * across application restarts. Conversions beginning with '#' are reserved for internal
   * TDLib usage
   */
  public conversion: string

  /** Expected size of the generated file, in bytes; 0 if unknown */
  public expectedSize: number
}
