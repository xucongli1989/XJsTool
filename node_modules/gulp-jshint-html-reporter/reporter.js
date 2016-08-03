'use strict';

var defaultFilename = 'jshint-output.html';

var wrStream;
var filename;

module.exports = {
    reporter: function (result, data, opts) {

        var fs = require('fs');
        var path = require('path');

        var templates = {
            body: '',
            item: '',
            itemHeader: '',
            noItems: '',
            summary: ''
        };

        var numberOfFailures = {
            failures: 0,
            errors: 0,
            warnings: 0
        };

        function init() {
            loadTemplates();
            calculateNumberOfFailures();
            writeToFile(getRenderedHTML(), opts);
        }

        function calculateNumberOfFailures() {
            numberOfFailures.failures = result.length;

            result.forEach(function (element) {
                if (isError(element.error.code)) {
                    numberOfFailures.errors += 1;
                } else {
                    numberOfFailures.warnings += 1;
                }
            });
        }

        function escapeHtml(text) {
            if (typeof text !== 'string')
                return text;
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        function isError(errorCode) {
            return errorCode && errorCode[0] === 'E';
        }

        function loadTemplates() {
            var templatePath = path.join(__dirname) + '/templates/bootstrap/';

            for (var template in templates) {
                templates[template] = fs.readFileSync(templatePath + template + '.html').toString();
            }
        }

        function prepareContent() {
            var content = '';
            var previousFile = '';

            if (result.length === 0) {
                return templates.noItems;
            }

            result.forEach(function (element) {
                var file = element.file;
                var error = element.error;

                if (previousFile !== file) {
                    previousFile = file;
                    content += templates.itemHeader.replace('{file}', file);
                }

                content += templates.item.replace('{class}', isError(error.code) ? 'danger' : 'warning')
                    .replace('{code}', escapeHtml(error.code))
                    .replace('{line}', escapeHtml(error.line))
                    .replace('{character}', escapeHtml(error.character))
                    .replace('{evidence}', escapeHtml(error.evidence))
                    .replace('{reason}', escapeHtml(error.reason));
            });

            return content;
        }

        function prepareSummary() {
            var summary = templates.summary.replace('{failures}', numberOfFailures.failures)
                .replace('{errors}', numberOfFailures.errors)
                .replace('{warnings}', numberOfFailures.warnings);

            return numberOfFailures.failures ? summary : '';
        }

        function getRenderedHTML() {
            return templates.body
                .replace('{content}', prepareContent())
                .replace('{summary}', prepareSummary());
        }

        fs.mkdirTree = function (dir){
            var parent = path.dirname(dir);
            if(!fs.existsSync(parent)){
                fs.mkdirTree(parent);
            }
            if (!fs.existsSync(dir)) {
                fs.mkdir(dir);
            }
        }              

        function writeToFile(content, opts) {
            opts = opts || {};
            opts.filename = opts.filename || defaultFilename;

            if (wrStream && filename !== opts.filename) {
                wrStream.end();
                wrStream = null;
            }
            if (!wrStream) {
                var dir = path.dirname(opts.filename);
                if (opts.createMissingFolders && !fs.existsSync(dir)) {
                    fs.mkdirTree(dir);
                }
                wrStream = fs.createWriteStream(opts.filename);
                filename = opts.filename;
            }
            wrStream.write(content);
        }

        init();
    }
};
