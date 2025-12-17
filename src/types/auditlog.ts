interface AuditLog {
  id: number;
  action: string;
  tableName: string;
  recordId: number;
  oldValue?: string;
  newValue?: string;
  deletedValue?: string;
  userId: number;
  userName: string;
  timestamp: string;
}

export interface AuditLogResponseType {
  allAuditLogs: AuditLog[];
}
