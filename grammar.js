module.exports = grammar({
  name: "wow_toc",
  extras: ($) => [/[\t ]/],

  rules: {
    source_file: ($) => repeat(choice($.tag, $.file_line, $.comment, $.blank)),
    blank: (_) => /\r?\n/,
    comment: (_) => seq("#", optional(/[^#\r\n][^\r\n]*/), /\r?\n/),
    key: (_) => /[A-Za-z][A-Za-z0-9_ ]*/,
    value: (_) => /[^\r\n]*/,
    path: (_) => /[A-Za-z0-9_./\\-]+(\.xml|\.lua)?/,
    tag: ($) =>
      seq("##", field("key", $.key), ":", field("value", $.value), /\r?\n/),
    file_line: ($) => seq(field("path", $.path), /\r?\n/),
  },
});
