AngularJS Bootstrap3 Dialog
=======================================

    <button ng-click="show=true">Test</button>

    <dialog title="Hello" ok="Go!" visible="show" on-cancel="show = false" on-ok="show = false; doSomething()">
      fancy {{variables}} from scope
    </dialog>

It's that simple.


License: MIT