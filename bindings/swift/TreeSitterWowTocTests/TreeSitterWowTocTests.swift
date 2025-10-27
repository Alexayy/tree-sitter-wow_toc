import XCTest
import SwiftTreeSitter
import TreeSitterWowToc

final class TreeSitterWowTocTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_wow_toc())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading WoW TOC grammar")
    }
}
