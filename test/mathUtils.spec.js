describe('mathUtils', function() {
    it('should expose add method', function() {
        expect(MathUtils.add).toBeDefined();
    });

    describe('add()', function() {
        var a;
        var b;
        var result;

        beforeEach( function() {
            a = 1;
            b = 2;
            result = 0;
        });

        it('should add b to a', function() {
            result = MathUtils.add(a, b);

            expect(result).toEqual(3);
        });
    });

    it('should expose multiply method', function() {
        expect(MathUtils.multiply).toBeDefined();
    });
    
    describe('multiply()', function() {
        var a;
        var b;
        var result;

        beforeEach( function() {
            a = 2;
            b = 3;
            result = 0;
        });

        it('should multiply b by a', function() {
            result = MathUtils.multiply(a, b);

            expect(result).toEqual(6);
        });
    });
});
