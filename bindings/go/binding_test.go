package tree_sitter_wow_toc_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_wow_toc "github.com/tree-sitter/tree-sitter-wow_toc/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_wow_toc.Language())
	if language == nil {
		t.Errorf("Error loading WoW TOC grammar")
	}
}
