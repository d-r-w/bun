export interface AudioOperations {
  /**
   * Diarizes audio using the specified strategy.
   * @param audioBuffer The audio buffer to diarize.
   * @returns A promise that resolves to a JSON object representing the diarization result.
   */
  diarizeAudio(audioBuffer: ArrayBuffer): Promise<Record<string, any>>;
}

export interface WebOperations {
  /**
   * Performs a web search based on the given phrase.
   * @param phrase The search phrase to query.
   * @returns A promise that resolves to an array of URLs matching the search content.
   */
  search(phrase: string): Promise<string[]>;

  /**
   * Crawls a website starting from the given URL up to the specified depth.
   * @param url The starting URL to crawl from.
   * @param depth The maximum depth of crawling (how many links deep to go).
   * @returns A promise that resolves to an array of URLs that were found during the crawl.
   */
  crawl(url: string, depth: number): Promise<string[]>;

  /**
   * Parses the content of a web page from the given URL.
   * @param url The URL of the web page to parse.
   * @returns A promise that resolves to a string containing the parsed content of the web page.
   */
  parse(url: string): Promise<string>;
}

export interface ImageOperations {
  /**
   * Renders an image based on the given prompt.
   * @param prompt A string describing the image to be generated.
   * @returns A promise that resolves to a buffer containing the rendered image data.
   */
  renderImage(prompt: string): Promise<ArrayBuffer>;
}
