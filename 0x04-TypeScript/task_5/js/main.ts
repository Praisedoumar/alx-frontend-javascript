interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sumCredits: number = subject1.credits + subject2.credits;
    return {
        credits: sumCredits,
        __brand: 'MajorCredits',
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sumCredits: number = subject1.credits + subject2.credits;
    return {
        credits: sumCredits,
        __brand: 'MinorCredits',
    };
}
