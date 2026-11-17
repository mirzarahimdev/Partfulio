export type SkillCategoryId = 'mobile' | 'backend' | 'tools'

export type SkillId =
  | 'flutter'
  | 'dart'
  | 'firebase'
  | 'python'
  | 'fastapi'
  | 'rest'
  | 'git'
  | 'github'
  | 'docker'
  | 'cursor'
  | 'vscode'

export type SkillItem = {
  id: SkillId
  name: string
  category: SkillCategoryId
}

export const skillCategories: SkillCategoryId[] = [
  'mobile',
  'backend',
  'tools',
]

export const skills: SkillItem[] = [
  { id: 'flutter', name: 'Flutter', category: 'mobile' },
  { id: 'dart', name: 'Dart', category: 'mobile' },
  { id: 'firebase', name: 'Firebase', category: 'mobile' },
  { id: 'python', name: 'Python', category: 'backend' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend' },
  { id: 'rest', name: 'REST API', category: 'backend' },
  { id: 'git', name: 'Git', category: 'tools' },
  { id: 'github', name: 'GitHub', category: 'tools' },
  { id: 'docker', name: 'Docker', category: 'tools' },
  { id: 'cursor', name: 'Cursor', category: 'tools' },
  { id: 'vscode', name: 'VS Code', category: 'tools' },
]
