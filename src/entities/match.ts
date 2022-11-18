export class Match {
    constructor(
        public id: string,
        public owner: string,
        public status: string,
        public events: Record<string, unknown>[] | null = null,
        public gameState: Record<string, unknown> | null = null,
    ) {}
}
