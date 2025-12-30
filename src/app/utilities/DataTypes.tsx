// ================= //
// Basic data types. //
// ================= //

export interface Address {
	streetAddress: string;
	town: string;
	state: string;
	zipCode: number;
}

export interface HistoricDate {
	startDay?: number;
	startMonth?: number | string;
	startYear: number;
}

// TODO: clarify.
export interface HistoricDatetime {
	historicDatetime: number | string;
}

export interface PriceInfo {
	basePrice: number;
}

export interface SourceEntryId {
	sourceEntryId: number;
}

export interface SourceMetadata {
	sourceName: string;
	sourcePath?: string;
	sourceLocation: string;
	sourceType: string;
	originallyAccessed: string;
	sourceNotes?: string;
}

export interface Unit {
	unitType: string;
	unitSubtype: string;
	unitNotes?: string;
}

// ==================== //
// Extended data types. //
// ==================== //

// Address + SourceEntryId.
export interface HistoricInfo {
	placeholder: string;
	
}

// SourceMetadata + [HistoricDate | HistoricDatetime] + SourceEntryId.
export interface Source {
	placeholder: string;
	
}

// HistoricDate + Unit + SourceEntryId + PriceInfo.
export interface HistoricPrice {
	placeholder: string;
	
}

