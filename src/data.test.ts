import { describe, it, expect } from "vitest";
import { DEV_INFO, SKILL_CATEGORIES, PROJECTS, EXPERIENCES } from "./data";

// ─── DEV_INFO ────────────────────────────────────────────────────────────────

describe("DEV_INFO", () => {
  it("has a non-empty name", () => {
    expect(DEV_INFO.name.trim().length).toBeGreaterThan(0);
  });

  it("has a valid email format", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(DEV_INFO.email)).toBe(true);
  });

  it("has no social links (intentionally removed)", () => {
    expect(Object.keys(DEV_INFO.socials)).toHaveLength(0);
  });

  it("has exactly 3 stats", () => {
    expect(DEV_INFO.stats).toHaveLength(3);
  });

  it("every stat has a label and value", () => {
    DEV_INFO.stats.forEach((stat) => {
      expect(stat.label.trim().length).toBeGreaterThan(0);
      expect(stat.value.trim().length).toBeGreaterThan(0);
    });
  });
});

// ─── SKILL_CATEGORIES ────────────────────────────────────────────────────────

describe("SKILL_CATEGORIES", () => {
  it("has at least one category", () => {
    expect(SKILL_CATEGORIES.length).toBeGreaterThan(0);
  });

  it("every category has a title and skills", () => {
    SKILL_CATEGORIES.forEach((cat) => {
      expect(cat.title.trim().length).toBeGreaterThan(0);
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });

  it("every skill is a non-empty string", () => {
    SKILL_CATEGORIES.forEach((cat) => {
      cat.skills.forEach((skill) => {
        expect(skill.trim().length).toBeGreaterThan(0);
      });
    });
  });
});

// ─── PROJECTS ────────────────────────────────────────────────────────────────

describe("PROJECTS", () => {
  it("has at least one project", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it("has exactly 4 projects", () => {
    expect(PROJECTS).toHaveLength(4);
  });

  it("every project has a unique id", () => {
    const ids = PROJECTS.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("every project has required fields", () => {
    PROJECTS.forEach((project) => {
      expect(project.id.trim().length).toBeGreaterThan(0);
      expect(project.title.trim().length).toBeGreaterThan(0);
      expect(project.summary.trim().length).toBeGreaterThan(0);
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it("every project has a valid category", () => {
    const validCategories = ["Web Apps", "Mobile Application", "Creative Code", "Interactive Design"];
    PROJECTS.forEach((project) => {
      expect(validCategories).toContain(project.category);
    });
  });
});

// ─── EXPERIENCES ─────────────────────────────────────────────────────────────

describe("EXPERIENCES", () => {
  it("has at least one experience entry", () => {
    expect(EXPERIENCES.length).toBeGreaterThan(0);
  });

  it("every experience has a unique id", () => {
    const ids = EXPERIENCES.map((e) => e.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("every experience has required fields", () => {
    EXPERIENCES.forEach((exp) => {
      expect(exp.role.trim().length).toBeGreaterThan(0);
      expect(exp.company.trim().length).toBeGreaterThan(0);
      expect(exp.period.trim().length).toBeGreaterThan(0);
      expect(exp.bullets.length).toBeGreaterThan(0);
    });
  });
});
