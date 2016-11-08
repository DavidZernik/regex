validate.validators.checkRegex = function(value) {
    // Regex that checks if 'value' does not contain (specifically, does not begin with) any spaces
    // Without this regex, if the first character(s) are spaces, both the "cannot contain spaces" and "please enter password" errors are thrown.
    if (!/^\s+$/.test(value)) {
        var errors = [];

        if (/([\x00-\x7F])\1{3,}/ig.test(value)) {
            errors.push('^Cannot contain the same 4 characters in a row');
        }

        // Second constraint is needed because when you press delete in an input that is already empty, javascript produces a non-standard character
        if (!/^[\x00-\x7F]+$/.test(value) && (value.length !== 0)) {
            errors.push('^Must only contain standard characters');
        }

        if (/\s/g.test(value)) {
            errors.push('^Cannot contain spaces');
        }

        if (errors.length) return errors;
    }
};
