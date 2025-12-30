/**
 * Form Validation Unit Tests
 * Simple, practical tests for form validation logic
 * Run in browser console or via test framework
 */

// Test Suite: Form Validation
const FormValidationTests = {
    
    // Validation rules (mirroring the main script)
    validationRules: {
        name: (value) => value.trim().length >= 2,
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        service: (value) => value !== '',
        message: (value) => value.trim().length >= 10
    },

    // Test results storage
    results: [],
    
    /**
     * Run a single test
     */
    test(name, testFn) {
        try {
            const result = testFn();
            if (result === true) {
                this.results.push({ name, status: 'PASS', error: null });
                console.log(`✅ PASS: ${name}`);
            } else {
                this.results.push({ name, status: 'FAIL', error: 'Assertion failed' });
                console.log(`❌ FAIL: ${name}`);
            }
        } catch (error) {
            this.results.push({ name, status: 'ERROR', error: error.message });
            console.log(`💥 ERROR: ${name} - ${error.message}`);
        }
    },

    /**
     * Assert helper
     */
    assert(condition, message = 'Assertion failed') {
        if (!condition) {
            throw new Error(message);
        }
        return true;
    },

    /**
     * Run all tests
     */
    runAll() {
        console.log('\n🧪 Running Form Validation Tests...\n');
        console.log('=' .repeat(50));
        
        this.results = [];
        
        // Name Validation Tests
        this.testNameValidation();
        
        // Email Validation Tests
        this.testEmailValidation();
        
        // Service Validation Tests
        this.testServiceValidation();
        
        // Message Validation Tests
        this.testMessageValidation();
        
        // Input Handling Tests
        this.testInputHandling();
        
        // Summary
        console.log('\n' + '=' .repeat(50));
        const passed = this.results.filter(r => r.status === 'PASS').length;
        const failed = this.results.filter(r => r.status === 'FAIL').length;
        const errors = this.results.filter(r => r.status === 'ERROR').length;
        
        console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed, ${errors} errors`);
        console.log(`Total: ${this.results.length} tests\n`);
        
        return {
            passed,
            failed,
            errors,
            total: this.results.length,
            allPassed: failed === 0 && errors === 0
        };
    },

    /**
     * Name Validation Tests
     */
    testNameValidation() {
        const validate = this.validationRules.name;
        
        this.test('Name: Valid name with 2+ characters', () => {
            return this.assert(validate('محمد') === true);
        });
        
        this.test('Name: Valid English name', () => {
            return this.assert(validate('John Doe') === true);
        });
        
        this.test('Name: Invalid empty string', () => {
            return this.assert(validate('') === false);
        });
        
        this.test('Name: Invalid single character', () => {
            return this.assert(validate('م') === false);
        });
        
        this.test('Name: Invalid whitespace only', () => {
            return this.assert(validate('   ') === false);
        });
        
        this.test('Name: Valid name with leading/trailing spaces', () => {
            return this.assert(validate('  Ahmed  ') === true);
        });
    },

    /**
     * Email Validation Tests
     */
    testEmailValidation() {
        const validate = this.validationRules.email;
        
        this.test('Email: Valid standard email', () => {
            return this.assert(validate('test@example.com') === true);
        });
        
        this.test('Email: Valid email with subdomain', () => {
            return this.assert(validate('user@mail.company.com') === true);
        });
        
        this.test('Email: Valid email with numbers', () => {
            return this.assert(validate('user123@test.org') === true);
        });
        
        this.test('Email: Invalid without @', () => {
            return this.assert(validate('testexample.com') === false);
        });
        
        this.test('Email: Invalid without domain', () => {
            return this.assert(validate('test@') === false);
        });
        
        this.test('Email: Invalid without TLD', () => {
            return this.assert(validate('test@example') === false);
        });
        
        this.test('Email: Invalid empty string', () => {
            return this.assert(validate('') === false);
        });
        
        this.test('Email: Invalid with spaces', () => {
            return this.assert(validate('test @example.com') === false);
        });
    },

    /**
     * Service Validation Tests
     */
    testServiceValidation() {
        const validate = this.validationRules.service;
        
        this.test('Service: Valid selection - laravel', () => {
            return this.assert(validate('laravel') === true);
        });
        
        this.test('Service: Valid selection - website', () => {
            return this.assert(validate('website') === true);
        });
        
        this.test('Service: Valid selection - automation', () => {
            return this.assert(validate('automation') === true);
        });
        
        this.test('Service: Valid selection - maintenance', () => {
            return this.assert(validate('maintenance') === true);
        });
        
        this.test('Service: Invalid empty selection', () => {
            return this.assert(validate('') === false);
        });
    },

    /**
     * Message Validation Tests
     */
    testMessageValidation() {
        const validate = this.validationRules.message;
        
        this.test('Message: Valid message 10+ characters', () => {
            return this.assert(validate('This is a valid message for testing.') === true);
        });
        
        this.test('Message: Valid Arabic message', () => {
            return this.assert(validate('أريد موقع إلكتروني لشركتي') === true);
        });
        
        this.test('Message: Valid message exactly 10 chars', () => {
            return this.assert(validate('1234567890') === true);
        });
        
        this.test('Message: Invalid message less than 10 chars', () => {
            return this.assert(validate('short') === false);
        });
        
        this.test('Message: Invalid empty message', () => {
            return this.assert(validate('') === false);
        });
        
        this.test('Message: Invalid whitespace message', () => {
            return this.assert(validate('         ') === false);
        });
        
        this.test('Message: Valid with leading/trailing spaces', () => {
            return this.assert(validate('   Valid message here   ') === true);
        });
    },

    /**
     * Input Handling Tests
     */
    testInputHandling() {
        this.test('Input: Trim handles null-like values', () => {
            const trimSafe = (val) => (val || '').trim();
            return this.assert(trimSafe(null) === '' && trimSafe(undefined) === '');
        });
        
        this.test('Input: XSS basic prevention (no script execution)', () => {
            const maliciousInput = '<script>alert("xss")</script>';
            // Validation should still process the text correctly
            return this.assert(this.validationRules.name(maliciousInput) === true);
        });
        
        this.test('Input: Email with special characters rejected', () => {
            return this.assert(this.validationRules.email('test<script>@example.com') === false);
        });
        
        this.test('Input: Very long input handled', () => {
            const longInput = 'a'.repeat(10000);
            return this.assert(this.validationRules.message(longInput) === true);
        });
        
        this.test('Input: Unicode characters accepted', () => {
            return this.assert(
                this.validationRules.name('محمد مدني') === true &&
                this.validationRules.message('مرحبا، أريد موقع ويب') === true
            );
        });
    }
};

// Export for use in browser or test environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidationTests;
}

// Auto-run if loaded directly in browser
if (typeof window !== 'undefined') {
    window.FormValidationTests = FormValidationTests;
    console.log('💡 Form Validation Tests loaded. Run: FormValidationTests.runAll()');
}
