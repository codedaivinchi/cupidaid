// Assuming usage within an object's method
const obj = {
    signalRef: function(signal) {
        console.log('Signal:', signal);
    },
    exprRef: function(expr) {
        console.log('Expression:', expr);
    },
    check: _ => 
        isSignal(_) ? (signal = true, this.signalRef(_.signal)) :
        isExpr$1(_) ? (signal = true, this.exprRef(_.expr)) :
        _
};

obj.check({ signal: 'someSignal' }); // Outputs: Signal: someSignal
obj.check({ expr: 'someExpression' }); // Outputs: Expression: someExpression
obj.check('somethingElse'); // Returns: 'somethingElse'
