import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'src', 'database.json');
    const jsonData = await fs.readFile(dataFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}