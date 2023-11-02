const outer = () => {
    console.log(`outer`);

    const middle = () => {
        console.log(`middle`);

        const inner = () => {
            console.log(`inner`);
        };

        inner();
    };

    middle();
};

outer();