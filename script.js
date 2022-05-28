let counter = 0;

cycle: while (true) {
    const word = prompt("enter word, break or continue");
    counter++;

    switch (word) {
        case 'break':
            break cycle;
        case 'continue':
            continue

        default:
        alert(counter)

    }

}

